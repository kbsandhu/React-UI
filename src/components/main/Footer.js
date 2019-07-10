import React, { Component } from 'react'
import StickyFooter from 'react-sticky-footer';

export class Footer extends Component {
    render() {
        return (
            <div>
                <StickyFooter
                    bottomThreshold={100}
                    normalStyles={{
                        backgroundColor: "#999999",
                        padding: "2rem"
                    }}
                    stickyStyles={{
                        backgroundColor: "rgba(255,255,255,.8)",
                        padding: "2rem"
                    }}
                >
                    Add any footer markup here
                </StickyFooter>
            </div>
        )
    }
}

export default Footer
