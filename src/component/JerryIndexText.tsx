import React from 'react'

const JerryIndexText = (props: { jerryIndex: number }) => {
    let jerryIndexClassName = ''

    if (props.jerryIndex <= -5) {
        jerryIndexClassName = 'success'
    } else if (props.jerryIndex < 0) {
        jerryIndexClassName = 'info'
    } else if (props.jerryIndex >= 5) {
        jerryIndexClassName = 'danger'
    } else if (props.jerryIndex >= 0) {
        jerryIndexClassName = 'warning'
    }

    return (
        <span className={jerryIndexClassName}>{props.jerryIndex}</span>
    )
}

export default JerryIndexText
