import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CreateNewNetwork, GetNetworkList } from '../api/NetworkApis';
import { toast } from 'react-toastify';
import { NetworkList } from '../views/Network/NetworkList';


const initialState = {
  profileData: {},
  profile: [],
  unAssignedList: [],
  status: 'idle',
  screenMode: 'list',
  networktype: []
  
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const createNewNetworkAsync = createAsyncThunk(
  'network/newnetwork',
  async (data) => {
    const response = await CreateNewNetwork(data.formData, data.token);
    console.log("res: ",response)
    return response.data;
  }
);

export const GetNetworkListAsync = createAsyncThunk(
  'networkSlice/getnetworktype',
  async (data) => {
   
    const response = await GetNetworkList(data.formData, data.token);
    console.log("res :", response)
    return response.data;
  }
);


/*export const GetAvailableCustomerProfilesListAsync = createAsyncThunk(
  'customerProfile/list/available',
  async (data) => {
    const response = await GetAvailableProfilesList(data.token);
    return response.data;
  }
);*/

//  export const linkDonorAsync = createAsyncThunk(
  // 'customerProfile/linkdonor',
  // async (data) => {
    // const response = await LinkDonor(data.formData, data.token);
    // return response.data;
  //}
//);

// export const deLinkDonorAsync = createAsyncThunk(
 // 'customerProfile/delinkdonor',
  //async (data) => {
   // const response = await DeLinkDonor(data.formData, data.token);
    //return response.data;
  //}
//);

export const NetworkSlice = createSlice({
  name: 'networkSlice',
  initialState,
  /* reducers: {
      changeScreen: (state, action) => {
       // state.screen = action.payload
      },
  
    }, */
  extraReducers: (builder) => {
    builder
      .addCase(createNewNetworkAsync.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(createNewNetworkAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        toast.success(action.payload.message)
        // state.profileData = action.payload.token;
      }).addCase(GetNetworkListAsync.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(GetNetworkListAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.networktype = action.payload.list
        // state.profileData = action.payload.token;
      })//.addCase(GetAvailableCustomerProfilesListAsync.pending, (state, action) => {
        //state.status = 'loading';
      //})
      //.addCase(GetAvailableCustomerProfilesListAsync.fulfilled, (state, action) => {
        //state.status = 'idle';
        //state.list = action.payload.list
        // state.profileData = action.payload.token;
      //})//.addCase(linkDonorAsync.pending, (state, action) => {
        //state.status = 'loading';
      //})
      //.addCase(linkDonorAsync.fulfilled, (state, action) => {
       // state.status = 'idle';
       // toast.success(action.payload.message)
        // state.profileData = action.payload.token;
      //}).addCase(deLinkDonorAsync.pending, (state, action) => {
        //state.status = 'loading';
      //})
      //.addCase(deLinkDonorAsync.fulfilled, (state, action) => {
       // state.status = 'idle';
       // toast.success(action.payload.message)
        // state.profileData = action.payload.token;
      //});
  },
});

export const { changeScreen } = NetworkSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getScreenMode = (state) => state.networkSlice.screenMode;

//export const getAvailableProfiles = (state) => state.CustomerProfile.unAssignedList;

export const getNetworkList = (state) =>state.networkSlice.networktype;


// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
/*export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};*/

export default NetworkSlice.reducer;
