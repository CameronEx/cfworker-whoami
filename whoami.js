addEventListener('fetch', event => {
  event.respondWith(fetchAndApply(event.request))
})

/**
 * Return client IP address
 */

async function fetchAndApply(request) {  
  if (request.headers.get('cf-connecting-ip')) {
    return new Response(request.headers.get('cf-connecting-ip'),
        { status: 200, statusText: 'OK' })
  }

  return new Response('No source IP header', {status: 500, statusText: 'Internal Server Error.' })
}
