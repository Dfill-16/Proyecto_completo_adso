<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class movements extends Model
{
    use HasFactory;

    public const TYPE_IN = 'entrada';
    public const TYPE_OUT = 'salida';
    public const TYPE_RETURN = 'devolucion';

    public function products():BelongsTo{
        return $this->belongsTo(products::class);
    }

    public static function getTypeOptions(){
        return [
            self::TYPE_IN,
            self::TYPE_OUT,
            self::TYPE_RETURN
        ];
    }
}
