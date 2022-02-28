import React from 'react'

const UpdateButtonIcon = (props: {
    loading: boolean,
}) => {
    if (props.loading) {
        return (
            <svg
                width='1em'
                height='1em'
                viewBox='0 0 15 15'
            >
                <g fill='none'>
                    <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M1.5 6.625a.875.875 0 1 0 0 1.75a.875.875 0 0 0 0-1.75zm4 0a.875.875 0 1 0 0 1.75a.875.875 0 0 0 0-1.75zm4 0a.875.875 0 1 0 0 1.75a.875.875 0 0 0 0-1.75zm3.125.875a.875.875 0 1 1 1.75 0a.875.875 0 0 1-1.75 0z'
                        fill='currentColor'
                    />
                </g>
            </svg>
        )
    }

    return (
        <svg
            width='1em'
            height='1em'
            viewBox='0 0 24 24'
        >
            <path
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                d='M1.75 16.002C3.353 20.098 7.338 23 12 23c6.075 0 11-4.925 11-11m-.75-4.002C20.649 3.901 16.663 1 12 1C5.925 1 1 5.925 1 12m8 4H1v8M23 0v8h-8'
            />
        </svg>
    )
}

export default UpdateButtonIcon
