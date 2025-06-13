<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\movements;
use App\Models\products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MovementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $movements = movements::with('products')->get();
        return response()->json(['data' => $movements]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all(), movements::getTypeOptions());

        if (!in_array($request->type, movements::getTypeOptions())) {
            return response()->json([
                'error' => 'El movimiento que trata de hacer es inválido'
            ], 400);
        }

        $product = products::findorFail($request->product_id);

        if ($request->ammount <= 0) {
            return response()->json([
                'error' => 'La cantidad debe ser mayor a 0'
            ], 400);
        }

        if ($request->type === movements::TYPE_OUT && $request->ammount > $product->ammount) {
            return response()->json([
                'error' => 'Cantidad insuficiente en el inventario'
            ], 400);
        }
        
        DB::beginTransaction();
        try {
            $movement = new movements();
            $movement->product_id = $product->id;
            $movement->ammount = $request->ammount;
            $movement->type = $request->type;

            switch ($request->type) {
                case movements::TYPE_IN:
                case movements::TYPE_RETURN:
                    $product->ammount += $request->ammount;
                    break;
                case movements::TYPE_OUT:
                    $product->ammount -= $request->ammount;
                    break;
            }

            $movement->save();
            $product->save();
            DB::commit();

        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'error' => 'Error al realizar el movimiento: ' . $e->getMessage()
            ], 400);
        }

        
        $movement->save();

        return response()->json([
            'data' => $movement
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(movements $movement)
    {
        return response()->json(['data' => $movement]);
    }
    

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
