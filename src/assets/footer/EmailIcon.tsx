import React from 'react'

const EmailIcon = ({ size = 14 }: { size?: number }) => {
    return (
        <svg
            width={size}
            height={size * (12 / 14)}
            viewBox="0 0 14 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12.5097 0H1.38997C0.625485 0 0.00694983 0.625485 0.00694983 1.38997L0 9.72977C0 10.4943 0.625485 11.1197 1.38997 11.1197H12.5097C13.2742 11.1197 13.8997 10.4943 13.8997 9.72977V1.38997C13.8997 0.625485 13.2742 0 12.5097 0ZM12.5097 2.77993L6.94984 6.25485L1.38997 2.77993V1.38997L6.94984 4.86489L12.5097 1.38997V2.77993Z"
                fill="currentColor"
            />
        </svg>
    )
}

export default EmailIcon