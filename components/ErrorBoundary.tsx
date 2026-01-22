'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    this.setState({ errorInfo });
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50 text-gray-900">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-red-100 rounded-full">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-center mb-2">Something went wrong</h2>
            <p className="text-gray-500 text-center mb-6">
              The application encountered an unexpected error.
            </p>

            {this.state.error && (
              <div className="mb-6 p-4 bg-gray-100 rounded-lg overflow-auto max-h-48 text-left">
                <p className="font-mono text-xs text-red-600 break-words">
                  {this.state.error.toString()}
                </p>
                {this.state.errorInfo && (
                   <pre className="font-mono text-[10px] text-gray-500 mt-2 whitespace-pre-wrap">
                      {this.state.errorInfo.componentStack}
                   </pre>
                )}
              </div>
            )}

            <button
              onClick={() => window.location.reload()}
              className="w-full bg-black text-white font-semibold py-3 px-4 rounded-xl hover:bg-gray-800 transition-colors active:scale-95 transform duration-100"
            >
              Reload Application
            </button>

            <div className="mt-6 text-center">
               <p className="text-xs text-gray-400">
                  If this persists, please take a screenshot and send it to support.
               </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
