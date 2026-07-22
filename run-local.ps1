# Local preview — rebuilds token URLs, then serves docs/
Set-Location $PSScriptRoot
Write-Host "Building tokenized sites..."
node scripts/publish-standalone.mjs

$manifest = Get-Content tokens.local.json -Raw | ConvertFrom-Json
$sample = $manifest.cities[0]
Write-Host ""
Write-Host "Owner catalog: http://localhost:8766/$($manifest.ownerPath)"
Write-Host "Owner password: $($manifest.ownerPassword)"
Write-Host "Sample guide:  http://localhost:8766/$($sample.guide)"
Write-Host "Press Ctrl+C to stop."
python -m http.server 8766 --directory docs
