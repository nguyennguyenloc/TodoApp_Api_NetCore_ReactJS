import React, { Component } from 'react';
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusButton: true,
            statusList: true
        }
    }
    showButton = () => {
        if (this.state.statusButton) {
            return <div className="menuButton row">
                <div className="col-lg-2 col-md-2 col-sm-2"><i class="fas fa-list-ul"></i></div>
                <div className="menuButton__center col-lg-8 col-md-8 col-sm-8" onClick={(e) => this.props.formToggle(e)}>  Add List</div>
                <div className="col-lg-2 col-md-2 col-sm-2">1</div>
            </div>
        }
    }
    // statusList = () => {
    //     if (this.state.statusList) {
    //         return <div className="menuButton" onClick={(e) => this.props.formToggle(e)}>
    //             Show List
    //         </div>
    //     }
    // }
    statusList = () => {
        if (this.state.statusList) {
            return <div className="menuButton row">
                <div className="col-lg-2 col-md-2 col-sm-2"><i class="fas fa-list-ul"></i></div>
                <div className="menuButton__center col-lg-8 col-md-8 col-sm-8" onClick={(e) => this.props.formToggle(e)}> Show List </div>
                <div className="col-lg-2 col-md-2 col-sm-2">1</div>
            </div>
        }
    }
    render() {
        return (
            <div className="container menu ">
                <br />
                <div className="menuButton ">
                    <i className="fas fa-plus-circle"></i>
                </div>
                <br />
                <div className="menuButton row">
                    <div className="col-lg-2 col-md-2 col-sm-2"><i className="fas fa-star"></i></div>
                    <div className="menuButton__center col-lg-8 col-md-8 col-sm-8">
                        Importan
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2">
                        2
                    </div>
                </div>

                <div className="menuButton row">
                    <div className="col-lg-2 col-md-2 col-sm-2"><i className="fas fa-calendar-alt"></i></div>
                    <div className="menuButton__center col-lg-8 col-md-8 col-sm-8">
                        Planned
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2">
                        1
                    </div>
                </div>
                <hr style={{ border: '1px solid #5977de' }} />
                <div className="menuButton row">
                    <div className="col-lg-2 col-md-2 col-sm-2"><i className="far fa-check-square"></i></div>
                    <div className="menuButton__center col-lg-8 col-md-8 col-sm-8">
                        Index
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2">
                        2
                    </div>
                </div>

                <div className="menuButton row">
                    <div className="col-lg-2 col-md-2 col-sm-2"><i className="far fa-lightbulb"></i></div>
                    <div className="menuButton__center col-lg-8 col-md-8 col-sm-8">
                        Idea
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2">
                        3
                    </div>
                </div>

                {this.showButton()}

                {this.statusList()}
                <br />
                <div className="menuButton row">
                    <div className="col-lg-2 col-md-2 col-sm-2"><i className="fas fa-cog"></i></div>
                    <div className="menuButton__center col-lg-8 col-md-8 col-sm-8">
                        Setting
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2">
                    </div>
                </div>
                <br />
            </div>
        )
    };
}
export default Menu;