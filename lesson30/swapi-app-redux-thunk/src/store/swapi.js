import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSwapiData = createAsyncThunk(
    'swapi/fetchSwapiData',
    async (endpoint) => {
        const response = await fetch(`https://swapi.py4e.com/api/${endpoint}`);
        if (!response.ok) {
            throw new Error('Не вдалося отримати дані');
        }
        return await response.json();
    }
);
const swapiSlice = createSlice({
    name: 'swapi',
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        clearSwapiData: (state) => {
            state.data = null;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSwapiData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSwapiData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchSwapiData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { clearSwapiData } = swapiSlice.actions;
export default swapiSlice.reducer;

