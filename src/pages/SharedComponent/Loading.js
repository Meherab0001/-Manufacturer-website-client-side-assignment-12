import React from 'react';

const Loading = () => {
    return (
        <div class="h-screen flex items-center justify-center ">
            <button type="button" class="text-blue-400 ..." disabled>
                <svg class="w-16 h-16 text-accent border-b-2 border-gray-900 rounded-full animate-spin ..." viewBox="0 0 24 24">

                </svg>
                Processing...
            </button>
        </div>
    );
};

export default Loading;