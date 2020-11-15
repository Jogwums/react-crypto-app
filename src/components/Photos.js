import React, { Component } from 'react'
import axios from 'axios'

export default class Photos extends Component {
    constructor(props){
        super(props)
        this.state = {
            photos: []

        }
    }
    componentDidMount() {
        axios.get('https://api.imgflip.com/get_memes')
        // .then(response => console.log(response.data.data.memes))
        .then(({data} )=> this.setState({photos: data.data.memes}))
        .catch(error => console.log(error))
        
    }

    render() {
        const { photos } = this.state
        return (
            <div>
                {photos.slice(0,10).map((photo) => (
                    <>
                      <div class="max-w-sm rounded overflow-hidden shadow-lg">
                        <img src={photo.url} alt="img" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2"><h2>{photo.name}</h2></div>
                            <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
                      </div>
                                            
                    </>
                ))}
            </div>
        )
    }
}
