import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CreateNewProfile, GetCustomerList, GetCustomersDetails } from '../api/CustomerProfileApis';
import { toast } from 'react-toastify';
import { CustomerList } from '../views/CustomerManagement/CustomerList';


const initialState = {
  profileData: {},
  profile: [],
  unAssignedList: [],
  status: 'idle',
  screenMode: 'list',
  customers: []
  
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const createNewProfileAsync = createAsyncThunk(
  'customerProfile/newprofile',
  async (data) => {
    const response = await CreateNewProfile(data.formData, data.token);
    console.log("res: ",response)
    return response.data;
  }
);

export const GetCustomerListAsync = createAsyncThunk(
  'CustomerSlice/getcustomertype',
  async (data) => {
   
    const response = await GetCustomerList(data.formData, data.token);
    console.log("res :", response)
    return response.data;
  }
);

export const GetCustomersDetailsAsync = createAsyncThunk(
  'CustomerProfile/details',
  async (data) => {
    const response = await GetCustomersDetails(data.params, data.token);
    return response.data;
    
  }
);

export const CustomerProfileSlice = createSlice({
  name: 'CustomerSlice',
  initialState,
  reducers: {
      changeScreen: (state, action) => {
       // state.screen = action.payload
      },
      openDetails: (state, action) => {
        state.profileData = action.payload
        state.screenMode = "details"
      },
  
    }, 
  extraReducers: (builder) => {
    builder
      .addCase(createNewProfileAsync.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(createNewProfileAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        toast.success(action.payload.message)
        // state.profileData = action.payload.token;
      }).addCase(GetCustomerListAsync.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(GetCustomerListAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.customers = action.payload.list
        // state.profileData = action.payload.token;
      }).addCase(GetCustomersDetailsAsync.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(GetCustomersDetailsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        console.log(action.payload.list, 'data resp')
        state.profileData= action.payload.list
        // state.profileData = action.payload.token;
      });
  },
});

export const { changeScreen } = CustomerProfileSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getScreenMode = (state) => state.CustomerSlice.screenMode;

//export const getAvailableProfiles = (state) => state.CustomerProfile.unAssignedList;

export const getCustomerList = (state) =>state.CustomerSlice.customers;

export const getCustomersDetails = (state) =>state.CustomerSlice.profileData;
// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
/*export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};*/

export default CustomerProfileSlice.reducer;