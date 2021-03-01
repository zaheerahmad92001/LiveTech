import store from '../Redux/Store'
let token='';
export function requestHandler(type,URL, reqData,dataType) {
    try{
        token= store.getState().reducersHandler.userInfo.token
          // console.log('user token in requestCallHandler',token)
          }catch(error){
            console.log('error in token accessing ', error)
          }
  let { req } = setupRequest(type, reqData,token,dataType)
  return new Promise((resolve, reject) => {
    fetch(URL, req)
      .then(response => {
        return response.json()

      })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        console.log("REQUEST HANDLER",error);
        reject(error);
      });
  });
}
function setupRequest(type, reqData,token,dataType) {
  let req = null
  let route = null
  if (type=== 'GET') {
    req = {
      method: 'GET',
      headers: {
				'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'bearer' + token
			},
    }
    
  } 
  else if (type === 'POST') {
    if(dataType==='multipart'){
     req = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
        'Authorization': `bearer ${token}`
      },
      body: reqData,
    }

    }else
    req = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'bearer' + token
      },
      body: JSON.stringify(reqData)
    }
    // route = requests[type].route
    // console.log('the request body', req)
  }

  return { req, route }
}