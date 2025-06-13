<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\products;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = products::all();
        return response()->json(['data'=>$products]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $product = new products();

        $product->sku = $request->sku;
        $product->name = $request->name;
        $product->unit = $request->unit;
        $product->ammount = $request->ammount;
        $product->save();

        return response()->json([
            'data' =>$product
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(products $product)
    {
        return response()->json(['data'=>$product]);
    }
    
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, products $product)
    {
        $product->sku = $request->sku;
        $product->name = $request->name;
        $product->unit = $request->unit;
        $product->ammount = $request->ammount;
        $product->save();

        return response()->json([
            'data' =>$product
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(products $product) 
    {
        $product->delete();
        return response()->json(['data'=>$product]);
    }
}
