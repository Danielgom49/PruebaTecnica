import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Ingredients from '../container/Ingredients'

export const DashboardRouter = ({ isAuthenticated }) => {
    return (
        <>
            <div>
                <Routes >
                    <Route path="/" element={<Ingredients isAuthenticated={isAuthenticated} />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </>
    )
}
