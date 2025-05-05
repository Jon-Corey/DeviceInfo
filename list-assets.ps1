$outputFile = "service-worker-assets.js"

$fileList = Get-ChildItem -Recurse -File -Exclude "list-assets.ps1", ".gitignore", "README.md" | Where-Object { $_.FullName -notmatch '\\.github\\' } | ForEach-Object {
    $_.FullName.Replace((Get-Location).Path, "").Replace("\", "/").TrimStart("/")
}

$jsContent = "self.assetsManifest = {""version"":""1.0.0"",""assets"":" + ($fileList | ConvertTo-Json -Compress) + "};"

$jsContent | Set-Content $outputFile

Write-Host "$outputFile updated."
