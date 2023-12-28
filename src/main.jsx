import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import ChartContextProvider from './context/ChartContext.jsx'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ChartContextProvider>
                <App/>
            </ChartContextProvider>
            <ReactQueryDevtools initialIsOpen={true}/>
        </QueryClientProvider>
    </React.StrictMode>,
)
