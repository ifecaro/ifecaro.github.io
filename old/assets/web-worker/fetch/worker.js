onmessage=async a=>{try{var e=JSON.parse(a.data),s=await(await fetch.apply(void 0,e)).text();postMessage(s)}catch(a){console.error(a)}finally{close()}};