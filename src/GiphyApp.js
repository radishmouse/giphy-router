import React from 'react';
import axios from 'axios';
import GiphyImage from './GiphyImage';


class GiphyApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            giphy: {},
            tag: ''
        };
    }

    componentDidMount() {
        this._getGiphy(this.props.tag);        
    }

    static getDerivedStateFromProps(props, state) {        
        if (props.tag !== state.tag) {
            return {
                giphy: {},
                tag: props.tag
            }        
        } else {
            return {
                ...state,                
            }
        }
    }

    render() {
        return (
            <div>                
                {
                    this.state.giphy.url ? <GiphyImage url={this.state.giphy.url} />
                                         : <button onClick={this._getGiphy}>Show me {this.state.tag}</button>
                }
                
                
            </div>
        );
    }

    _giphyUrl = (tag) => `https://api.giphy.com/v1/gifs/random?api_key=H2R4CV5XYRUZEG1jAn5GP4Rl9oWsSeCX&tag=${tag}&rating=G`

    _getGiphy = (tag) => {
        axios.get(this._giphyUrl(this.props.tag))
            .then(response => {                
                this.setState({
                    giphy: response.data.data.images.downsized_large
                });
            })
            .catch(err => {
                console.log('Yeah, no giphy for you');
            })
    }
}

export default GiphyApp;