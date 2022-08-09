import React from 'react'
import './WithLoading.css'

const WithLoading = ( WrappedComponent ) => {
    class NewComponent extends React.Component {
        
        render () {
            const isLoading = this.props.isLoading;
            const page = this.props.pageNumber

            return (
                <>
                    {( isLoading && page === 1 ) ? <div className="loader-container "><div className="loader" /></div> :
                        <WrappedComponent {...this.props} />}
                </>
            )

        }
    }
    return NewComponent

}


export default WithLoading

