@echo off
echo Testing Security Fixes...

echo 1. Testing Localhost Block on Proxy...
curl -I "http://localhost:3000/api/og/proxy?url=http://localhost:3000"
echo Expected: 400 Bad Request

echo.
echo 2. Testing Metadata IP Block on Proxy...
curl -I "http://localhost:3000/api/og/proxy?url=http://169.254.169.254"
echo Expected: 400 Bad Request

echo.
echo 3. Testing Localhost Block on Fetch...
curl -I "http://localhost:3000/api/og/fetch?url=http://localhost:3000"
echo Expected: 400 Bad Request

echo.
echo 4. Testing Valid URL...
curl -I "http://localhost:3000/api/og/fetch?url=https://www.google.com"
echo Expected: 200 OK

echo.
echo Done.
