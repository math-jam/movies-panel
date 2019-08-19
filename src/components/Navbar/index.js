import React from 'react';
import { Nav } from '../../styles'
import axios from 'axios';

export default function Navbar() {
	const key = 'd849a15';
	const titleMovie = window.location.hash.replace(/%20/gi, "+").replace('#', '')
  
	axios.get(`http://www.omdbapi.com/?apikey=${key}&plot=full&type=movie&s=${titleMovie}`)
	  .then(res => { console.log(res) })
	  .catch(res => { console.log(res) })
	  
	return (
		<Nav>
			<div class="topnav">
				<a class="active" href="#home">Movies Panel</a>
				<div class="search-container">
					<form action="/action_page.php">
						<input type="text" placeholder="Search.." name="search"/>
						<button type="submit"><i class="fa fa-search"></i></button>
					</form>
				</div>
			</div>
		</Nav>
	)
}