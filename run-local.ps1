# Local preview — open http://localhost:8766/bosnia/?lang=ar
Set-Location $PSScriptRoot
if (-not (Test-Path docs/bosnia/index.html)) {
  Write-Host "Building sites..."
  node scripts/publish-standalone.mjs
}
Write-Host "Open: http://localhost:8766/bosnia/?lang=ar"
Write-Host "Press Ctrl+C to stop."
python -m http.server 8766 --directory docs
