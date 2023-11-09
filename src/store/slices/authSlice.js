import { createSlice, current } from '@reduxjs/toolkit';
import axios from 'axios';
import END_POINT from '@/components/config/index';
import jwt_decode from 'jwt-decode';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux'; // Import useDispatch
const initialState = {
  isAuth: false,
  currentUser: null,
  currentCompany:null,
  someVar: 'blah blah blah',
  authToken: '',
  codeFromServer:'none',
  bannersById:'',
  allBanners:'',
  allCompanies:[],
  allRevises:'',
  error:'',
  titleCounter: 0,
  allTitles:[]
};
const token = localStorage.getItem('token');

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,

//   reducers: {
//     authorize: (state, action) => {
//       localStorage.setItem('token', action.payload.token);
//       axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`;
//       // axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`;
//       const decoded = jwt_decode(action.payload.token);

//       state.currentUser = {
//         id: decoded.id,
//         email: decoded.email,
//         name: decoded.name,
//         username: decoded.username,
//         password: decoded.password,
//       };
//       state.isAuth = true;
//     },

//     login: (state, action) => {
//       console.log('Login Reducer started! ')
//       localStorage.setItem("token", action.payload.token);
//       console.log('TOKEN',localStorage.getItem("token"));
//       axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`;

//       // axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`; // Add space after 'Bearer'
//       const decoded = jwt_decode(action.payload.token);
//       console.log('decoded token=========', decoded)
//       state.currentUser = {
//         id: decoded.id,
//         email: decoded.email,
//         name: decoded.name,
//         username: decoded.username,
//         password: decoded.password,
//       };
//       state.isAuth = true;
//     console.log('curr user',state.currentUser)
//     },



//     logout: (state) => {
//       // Clear user-related state when logging out
//       localStorage.removeItem('token'); // Remove the token from localStorage
//       axios.defaults.headers.common['Authorization'] = ''; // Remove Authorization header
//       state.currentUser = null;
//       state.isAuth = false;
//     },
//   },
// });


export const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    sendErrorReducer:(state,action)=>{
      // console.log('sendErrorReducer error=',action)
      console.log('sendErrorReducer error=',action.payload)
      state.error=action.payload
    },

    loginReducer:(state,action)=>{
     
              localStorage.setItem('token', action.payload.token);
              axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`;
              // axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`;
              const decoded = jwt_decode(action.payload.token);
        
              state.currentUser = {
                id: decoded.id,
                email: decoded.email,
                name: decoded.name,
                username: decoded.username,
                password: decoded.password,
              };
              state.isAuth = true;
            },

    ReviseReducer:(state,action)=>{
      console.log('1.3 ReviseReducer',action.payload)
      state.allRevises=action.payload
      
    },    
    getAllRevisesReducer:(state,action)=>{
      console.log('1.3 ReviseReducer',action.payload)
      state.allRevises=action.payload
      
    },   
    getAllCompaniesReducer:(state,data)=>{
      const existingPostIds = state.allCompanies.map(post => post.id);
      // Фильтруйте новые посты, чтобы исключить дубликаты
      const newPosts = data.payload.filter(newPost => !existingPostIds.includes(newPost.id));
      console.log('New posts from reducer', newPosts)
      // Добавьте только новые посты в state.allPosts
      state.allCompanies.push(...newPosts);
      console.log('All companies from reducer', state.allCompanies)



      // console.log('1.3 getAllBannersReducerr-',action.payload)
      // state.allCompanies.push(...action.payload)

      
    },        
    getAllBannersReducer:(state,action)=>{
      console.log('1.3 getAllBannersReducerr-',action.payload)
      state.allBanners=action.payload
      console.log('1.3 getAllBannersReducer-',state.bannersById)
    },
    getBannerByCompanyIdReducer:(state,action)=>{
      console.log('1.3 getBannerByCompanyIdReducer-',action.payload)
      state.bannersById=action.payload
      console.log('1.3 getBannerByCompanyIdReducer-',state.bannersById)
    },

    setCurrentUser:(state,action)=>{
      console.log('1.3 setCurrentUser',action.payload)
      state.currentUser=action.payload
      console.log('1.4 CURRENT  USER CHANGED IN setCurrentUser',state.currentUser)
      state.currentCompany = action.payload.companyId;

    },

    authorize: (state, action) => {

      state.someVar=action.payload
      state.authToken=null
      state.authToken=action.payload
      
      console.log('PAYLOAD=',action.payload,'codeFromServer=',state.currentUser)

      // const decoded = jwt_decode(action.payload.token);
      // console.log('1 authorize decoded token=========', decoded)

      
      
      // localStorage.setItem("token", action.payload.token);
      // axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`;
      // // axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`; // Add space after 'Bearer'
    
      // const decoded = jwt_decode(action.payload.token);
      // console.log('decoded token=========', decoded)


        // };
      
    },

    loginAuthorize: (state, action) => {

      state.someVar=action.payload
      
      console.log('PAYLOAD=',action.payload,'codeFromServer=',state.currentUser)

      
    },

    sendCodeReducer: (state, action) => {
      // console.log('SendCodeReducer token from profileMyposts'.action.payload)
      localStorage.setItem("token", action.payload.token);
      
      axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`;
      // axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`; // Add space after 'Bearer'
    
      const decoded = jwt_decode(action.payload.token);
      console.log('decoded token=========', decoded)

      

      state.authToken = {
        id: decoded.id,
        email: decoded.email,
        code:decoded.code,
        name:decoded.name,
        phone:decoded.phone,
        lastname:decoded.lastname,
        companyId:decoded.companyId,
      };

      state.currentUser = {
        id: decoded.id,
        email: decoded.email,
        code:decoded.code,
        name:decoded.name,
        phone:decoded.phone,
        lastname:decoded.lastname,
        companyId:decoded.companyId,
      };
      state.isAuth = true;
  },

  setCounterReducer: (state, action) => {
    console.log('SetCounterReducer start', action.payload.t_number);
    state.titleCounter = action.payload.t_number;
  },

  sendUserDataReducer: (state, action) => {
    console.log(' 1 SendDataReducer token from sendDataUserReducer',action.payload)
    
    state.currentUser=action.payload
    console.log(' 2 SendDataReducer state changed',state.currentUser)
    

  //   state.currentUser = state.allPosts.map(item => {
  //     if(item.id === data.payload.postId) {
  //         item.commentaries.push(data.payload)
  //         return item
  //     } 
  //     return item

  // })

    // localStorage.setItem("token", state.currentUser);
    
    // axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`;
    
  
    
    // console.log('decoded token=========', localStorage.getItem("token"))

    


    // state.currentUser = {
    //   id: decoded.id,
    //   email: decoded.email,
      
    // };
    // state.isAuth = true;
},
      addCompanyReducer: (state, action) => {
        // state.currentCompany = action.payload;
        console.log('AddCompanyReducer Started', action.payload)
      },


     


      logout: (state) => { // Clear user-related state when logging out
          console.log('Logut start')
          localStorage.removeItem('token'); // Remove the token from localStorage
          axios.defaults.headers.common['Authorization'] = ''; // Remove Authorization header
          state.currentUser = null;
          state.isAuth = false;
          state.authToken = null;
      },
      getAllTitles:(state,action)=>{
        console.log('1.3 getAllTitles-',action.payload)
        state.allTitles=action.payload
        
      },
  }
});

// Action creators are generated for each case reducer function
export const { sendErrorReducer,getAllRevisesReducer,ReviseReducer,authorize, logout, 
  editVar ,sendCodeReducer,sendUserDataReducer,setCurrentUser,getBannerByCompanyIdReducer,
  getAllBannersReducer, loginReducer,addCompanyReducer,getAllCompaniesReducer, setCounterReducer,getAllTitles} = authSlice.actions;

// Use useEffect for token initialization
// export const useTokenInitialization = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (token) {
//       let decodedToken = jwt_decode(token);

//       // Create a new state object and set properties
//       const newState = {
//         ...initialState,
//         isAuth: true,
//         currentUser: {
//           id: decodedToken.id,
//           email: decodedToken.email,
//           name: decodedToken.name,
//           password: decodedToken.password,
//           username: decodedToken.username,
//         },
//       };

//       axios.post(`${END_POINT}/api/auth/login`, {
//         email: decodedToken.email,
//         password: decodedToken.password,
//       }).then((res) => {
//         dispatch(login(res.data));
//       });

//       // Dispatch the login action with the new state
//       dispatch(login(newState));
//     } else {
//       localStorage.removeItem('token');
//     }
//   }, [token, dispatch]);

//   console.log('Token не найден');
//   return null;
// };




export const  getAllTitlesAction= () => async(dispatch) => {
  console.log('1 getAllBanner started')
  
  const response = await axios.get(
    `${END_POINT}/api/gettitles`,{
      headers: {
        // 'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json', // Set the content type to JSON
      },
    }
  ).then((response) => {
    console.log('1.2 getBannerByCompanyId response ',response.data)
    dispatch(getAllTitles(response.data));
  });
};


export const  getAllRevises= () => async(dispatch) => {
  console.log('1 getAllRevises started')
  
  const response = await axios.get(
    `${END_POINT}/api/revise/getallrevises`,{
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json', // Set the content type to JSON
      },
    }
  ).then((response) => {
    console.log('1.2 getAllCompanies response ',response.data)
    dispatch(getAllRevisesReducer(response.data));
  });
};

export const  getAllCompanies= () => async(dispatch) => {
  console.log('1 getAllBanner started')
  
  const response = await axios.get(
    `${END_POINT}/api/auth/getallcompanies`,{
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json', // Set the content type to JSON
      },
    }
  ).then((response) => {
    console.log('1.2 getAllCompanies response ',response.data)
    dispatch(getAllCompaniesReducer(response.data));
  });
};

export const  getAllBanners= () => async(dispatch) => {
  console.log('1 getAllBanner started')
  
  const response = await axios.get(
    `${END_POINT}/api/banner/getall`,{
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json', // Set the content type to JSON
      },
    }
  ).then((response) => {
    console.log('1.2 getBannerByCompanyId response ',response.data)
    dispatch(getAllBannersReducer(response.data));
  });
};


export const  getBannerByCompanyIdAction= (companyId) => async(dispatch) => {
  console.log('1 getBannerByCompanyId started')
  console.log('1.1 COMPANYID======', companyId)
  const response = await axios.get(
    `${END_POINT}/api/banner/getbycompanyid/${companyId}`,{
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json', // Set the content type to JSON
      },
    }
  ).then((response) => {
    console.log('1.2 getBannerByCompanyId response ',response.data)
    dispatch(getBannerByCompanyIdReducer(response.data));
  });
};

export const  getUserInfo=async(dispatch)=>{
  
  console.log('1 getUserInFo started')
  const response = await axios.get(
    `${END_POINT}/api/auth/getAuthentificatedUserInfo`,{
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json', // Set the content type to JSON
      },
    }
  ).then((response) => {
    console.log('1.2 getUserInFo response ',response.data)
    dispatch(setCurrentUser(response.data));
  });
};



export const useTokenInitialization = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    // console.log('TOKENNNNNNNNNnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn', token)
    if (token) {
      try {
        let decodedToken = jwt_decode(token);
        // console.log('decode token', decodedToken)
        // Dispatch the authorize action with user data from the token
        dispatch(
          authorize({
            token: token,
            id: decodedToken.id,
            email: decodedToken.email,
            name: decodedToken.name,
            username: decodedToken.username,
            password: decodedToken.password,
          })
        );
      } catch (error) {
        console.error('Error decoding token:', error);
        localStorage.removeItem('token'); // Remove invalid token
      }
    }
  }, [dispatch]);

  return null;
};




export const createUser = (email, name, password, username) => (dispatch) => {
  // console.log('1 createUser запустился ', email, name, password, username);

  axios.post(`${END_POINT}/api/auth/createuser`, {
    email: email,
    name: name,
    username: username,
    password: password,
  }).then((res) => {
    dispatch(authorize(res.data));
  }).catch((error)=>{
    console.log('error')
  });
};


export const loginInspectorAction = (email,password) => async(dispatch) => {
  // axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`;
  console.log('loginAction  start',email,password)
  // console.log('1 AutheUser запустился ', email, password);
 await axios.post(`${END_POINT}/api/auth/login`, {
    email: email,
    password:password,
    
  }).then((res) => {
    console.log('response from loginAction ',res)
    dispatch(loginReducer(res.data));
  });
};

export const loginAction = (email,password) => async(dispatch) => {
  // axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`;

  console.log('loginAction  start',email,password)
  // console.log('1 AutheUser запустился ', email, password);


 await axios.post(`${END_POINT}/api/auth/login`, {
    email: email,
    password:password,
  }).then((res) => {
    console.log('response from loginAction ',res)
    dispatch(loginReducer(res.data));
  });
};





export const sendCodeToEmailAction = (email) => async(dispatch) => {
  // axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`;

  // console.log('auth user start')
  // console.log('1 AutheUser запустился ', email, password);

 await axios.post(`${END_POINT}/api/auth/sendmail`, {
    email: email,
  }).then((res) => {
    console.log('response ',res)
    dispatch(authorize(res.data));
  });
};





export const verifyCodeAction = (email,code) => async (dispatch) => {
  // axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`;
  console.log('VerifuCodeAction started',email,typeof(email),code,typeof(code))
  // console.log('1 AutheUser запустился ', email, password);
 await axios.post(`${END_POINT}/api/auth/verifycode`, {
    email: email,
    fullcode:code
  }).then((res) => {
    console.log('response from verifyCodeAction ',res.data)
    localStorage.setItem('token',res.data)
    dispatch(sendCodeReducer(res.data));
  });
};


export const addFullProfileDataAction=(password,phone,name,lastname)=>async(dispatch)=>{
  console.log('addFullProfileDataAction started',password,phone,name,lastname)

  const token = localStorage.getItem("token");


  const formData = new FormData();
  formData.append('password', password);
  formData.append('phone', phone);
  formData.append('name', name);
  formData.append('lastname', lastname);

  let sometext='text from shareFUNCTION'

  // console.log('FORMDATA before pass to redux',formData)
  for (const value of formData.values()) {
      console.log('addFullProfileDataAction  formData Values',value);
    }
  // console.log('1 createPostSlice | createPostFunc запустился ');

  if (!token) {
    // Handle the case where the token is not available or invalid
    console.error('Token not available');
    return;
}
 

  
 
  try {
    const data = {
      password,
      phone,
      name,
      lastname,
    };
    console.log('Token from addFullProfileDataAction=',token,'addFullProfileDataAction Started formData=',data.password)
    const response = await axios.post(
      `${END_POINT}/api/auth/addfullprofile`,
      data.password,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json', // Set the content type to JSON
        },
      }
    );

    console.log('Data uploaded successfully:', response.data);
    dispatch(sendUserDataReducer(response.data))

 
    // Handle success, e.g., dispatch an action to update state
  } catch (error) {
    console.log('erro from auth Slicer=',error.response.data.message)
    
      await dispatch(sendErrorReducer(error.response.data))
    

    // Handle errors, e.g., by returning an error object or dispatching an error action
    console.error('Error uploading data:', error);
    // You can dispatch an error action here if needed.
  }}

export const addCompanyAction=(name,description,bin,address,contactEmail,contactPhone)=>async(dispatch)=>{
    console.log('addFullProfileDataAction started',name,description,bin,address,contactEmail,contactPhone)
  
    const token = localStorage.getItem("token");
  
  
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('bin', bin);
    formData.append('address', address);
    formData.append('contactEmail', contactEmail);
    formData.append('contactPhone', contactPhone);
  
    let sometext='text from shareFUNCTION'
  
    // console.log('FORMDATA before pass to redux',formData)
    for (const value of formData.values()) {
        console.log('addFullProfileDataAction  formData Values',value);
      }
  
  
    if (!token) {
      // Handle the case where the token is not available or invalid
      console.error('Token not available');
      return;
  }
   
  
    try {
      const data = {
        name,
        description,
        bin,
        address,contactPhone,contactEmail
      };
      console.log('Token from addFullProfileDataAction=',token,'addFullProfileDataAction Started formData=',data.name)
      const response = await axios.post(
        `${END_POINT}/api/auth/createcompany`,
        data.name,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json', // Set the content type to JSON
          },
        }
      );
  
      
      console.log('Data uploaded successfully:', response.data);
      dispatch(addCompanyReducer(response.data))
      // Handle success, e.g., dispatch an action to update state
    } catch (error) {
      await dispatch(sendErrorReducer(error.response.data))
    
      // Handle errors, e.g., by returning an error object or dispatching an error action
      console.error('Error uploading data:', error);
      // You can dispatch an error action here if needed.
    }}



    export const deleteTitleAction=(passedData)=>async(dispatch)=>{
      console.log('addFullProfileDataAction started',passedData)
    
      const token = localStorage.getItem("token");
    //   for (const value of formData.values()) {
    //     console.log('passed formData Values',value);
    // }
      
      if (!token) {
        console.error('Token not available');
        return;
      }

      try {
        const response = await axios.delete(
          `${END_POINT}/api/delete/${passedData}`
          
        );
      
        console.log('Data uploaded successfully:', response.data);
        // dispatch(setCounterReducer(response.data))
        // Handle success, e.g., dispatch an action to update state
      } catch (error) {
        console.error('Error uploading data:', error);
        // Handle errors, e.g., by returning an error object or dispatching an error action
      }
  

    }

    
    export const UpdateTitleAction=(formData)=>async(dispatch)=>{
      console.log('addFullProfileDataAction started')
    
      const token = localStorage.getItem("token");
      for (const value of formData.values()) {
        console.log('passed formData Values',value);
    }
      
      if (!token) {
        console.error('Token not available');
        return;
      }

      try {
        const response = await axios.put(
          `${END_POINT}/api/edittitle`,formData,{
            headers: {
              // 'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json', // Set the content type to JSON
            },
          }
        );
      
        console.log('Data uploaded successfully:', response.data);
        dispatch(setCounterReducer(response.data))
        // Handle success, e.g., dispatch an action to update state
      } catch (error) {
        console.error('Error uploading data:', error);
        // Handle errors, e.g., by returning an error object or dispatching an error action
      }
  

    }


    export const addTitleAction=(formData)=>async(dispatch)=>{
      console.log('addFullProfileDataAction started',formData)
    
      const token = localStorage.getItem("token");
      for (const value of formData.values()) {
        console.log('formData Values',value);
    }
      
      if (!token) {
        console.error('Token not available');
        return;
      }

      try {
        const response = await axios.post(
          `${END_POINT}/api/createtitle`,formData,{
            headers: {
              // 'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json', // Set the content type to JSON
            },
          }
        );
      
        console.log('Data uploaded successfully:', response.data);
        dispatch(setCounterReducer(response.data))
        // Handle success, e.g., dispatch an action to update state
      } catch (error) {
        console.error('Error uploading data:', error);
        // Handle errors, e.g., by returning an error object or dispatching an error action
      }
  

    }

    export const addSubTitleAction=(formData)=>async(dispatch)=>{
      console.log('addFullProfileDataAction started',formData)
    
      const token = localStorage.getItem("token");
      for (const value of formData.values()) {
        console.log('formData Values',value);
    }
      
      if (!token) {
        console.error('Token not available');
        return;
      }

      try {
        const response = await axios.post(
          `${END_POINT}/api/createsubtitle`,formData,{
            headers: {
              // 'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json', // Set the content type to JSON
            },
          }
        );
      
        console.log('Data uploaded successfully:', response.data);
        dispatch(setCounterReducer(response.data))
        // Handle success, e.g., dispatch an action to update state
      } catch (error) {
        console.error('Error uploading data:', error);
        // Handle errors, e.g., by returning an error object or dispatching an error action
      }
  

    }

export const addBannerAction=(formData)=>async(dispatch)=>{
      console.log('addFullProfileDataAction started',formData)
    
      const token = localStorage.getItem("token");
    
    
      

     
      for (const value of formData.values()) {
        console.log('formData Values',value);
    }
      
      if (!token) {
        console.error('Token not available');
        return;
      }
      



      try {
        const response = await axios.post(
          `${END_POINT}/api/banner`,formData,{
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'multipart/form-data', // Set the content type to 'multipart/form-data'
            },
          }
        );
      
        console.log('Data uploaded successfully:', response.data);
        // Handle success, e.g., dispatch an action to update state
      } catch (error) {
        console.error('Error uploading data:', error);
        // Handle errors, e.g., by returning an error object or dispatching an error action
      }
  

    }



    export const addReviseForBannerAction = (formData, bannerId) => async (dispatch) => {
      try {
        const token = localStorage.getItem('token');
    
        if (!token) {
          console.error('Token not available');
          return;
        }
    
        const response = await axios.post(`${END_POINT}/api/revise/${bannerId}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data', // Set the content type to 'multipart/form-data'
          },
        });
    
        console.log('Data uploaded successfully:', response.data);
    
        // Dispatch an action to update state or handle the response as needed
        dispatch(ReviseReducer(response.data));
      } catch (error) {
        console.error('Error uploading data:', error);
        // Handle errors, e.g., by returning an error object or dispatching an error action
      }
    };
    

    
export const logoutAction = () => (dispatch) => {
  // console.log('logoutAction started/');

  dispatch(logout());
};



export default authSlice.reducer;