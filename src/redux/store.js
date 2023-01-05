import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./tasksSlice";
import archiveReducer from "./archiveSlice";

export default configureStore({
    reducer:{
        tasks: taskReducer,
        archive: archiveReducer,
    }
});