# cfworker-whoami
A simple script to return the client IP address, to be used as a CloudFlare worker.

## Example Usage
```bash
client:~ user$ curl -v https://your.domain/whoami
*   Trying 2606:4700:4700::1001...
* TCP_NODELAY set
* Connected to your.domain (2606:4700:4700::1001) port 443 (#0)
<...output omitted...>
> GET /whoami HTTP/2
> Host: your.domain
> User-Agent: Mozilla/5.0 (Windows NT 6.1; rv:45.0) Gecko/20100101 Firefox/45.0
> Accept: */*
> Referer:
>
* Connection state changed (MAX_CONCURRENT_STREAMS updated)!
< HTTP/2 200
< date: Fri, 06 Apr 2018 01:15:17 GMT
< content-type: text/plain;charset=UTF-8
< content-length: 11
< set-cookie: __cfduid=nqhvKGw9Db1RrE36Ozka22977317; expires=Sat, 06-Apr-39 01:15:17 GMT; path=/; domain=.your.domain; HttpOnly; Secure
< strict-transport-security: max-age=15552000; preload
< x-content-type-options: nosniff
< expect-ct: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
< server: cloudflare
< cf-ray: 407067085fa8659f-SYD
<
* Connection #0 to host your.domain left intact
2606:4700:4700::1111
client:~ user$ 
```

## Reference
https://developers.cloudflare.com/workers/
