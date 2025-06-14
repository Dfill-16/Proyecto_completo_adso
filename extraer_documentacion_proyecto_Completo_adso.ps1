# Nombre del archivo de salida
$outputFile = "documentacion_proyecto.txt"

# Si existe, lo eliminamos
if (Test-Path $outputFile) { Remove-Item $outputFile }

# MODELOS
Add-Content $outputFile "`n===== MODELOS LARAVEL =====`n"

# Modelos ajustados
foreach ($model in @("backend-2998601\app\Models\products.php", "backend-2998601\app\Models\movements.php")) {
    Add-Content $outputFile "`n---- $model ----`n"
    Get-Content $model | Add-Content $outputFile
}

# CONTROLADORES API
Add-Content $outputFile "`n===== CONTROLADORES API =====`n"

# Controladores ajustados
foreach ($controller in @(
    "backend-2998601\app\Http\Controllers\Api\MovementController.php",
    "backend-2998601\app\Http\Controllers\Api\ProductController.php",
    "backend-2998601\app\Http\Controllers\Api\MovementsController.php",
    "backend-2998601\app\Http\Controllers\Api\ProductsController.php"
)) {
    Add-Content $outputFile "`n---- $controller ----`n"
    Get-Content $controller | Add-Content $outputFile
}

# FRONTEND SRC
Add-Content $outputFile "`n===== FRONTEND SRC =====`n"

# Recorrer todos los archivos dentro de src
Get-ChildItem -Path "front-2998601\src" -Recurse -Include *.js, *.jsx, *.ts, *.tsx, *.json | ForEach-Object {
    Add-Content $outputFile "`n---- $($_.FullName) ----`n"
    Get-Content $_.FullName | Add-Content $outputFile
}

Write-Host "`nArchivo consolidado: $outputFile"
