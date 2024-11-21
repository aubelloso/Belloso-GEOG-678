//Belloso Lab 4 2024

//Task - find corner points
// Find the top left point of boundary box = max lat and min lon
function findTopLeft(pointList) { 
	var maxLat = null;
	var minLon = null;
		
		pointList.data.forEach(
			point => {
				if (maxLat ==null) {
					maxLat = point.lat
					minLon = point.lon
				}
				else {
					if (point.lat > maxLat){
						maxLat = point.lat
					}
					if (point.lon < minLon){
						minLon = point.lon
					}
				}
			}
			)
		
		return {"pointID": 1, "lat": maxLat, "lon": minLon}
}

// Repeat for each other corner of boundary box

function findTopRight(pointList) { 
	var maxLat = null;
	var maxLon = null;
		
		pointList.data.forEach(
			point => {
				if (maxLat ==null) {
					maxLat = point.lat
					maxLon = point.lon
				}
				else {
					if (point.lat > maxLat){
						maxLat = point.lat
					}
					if (point.lon > maxLon){
						maxLon = point.lon
					}
				}
			}
			)
		
		return {"pointID": 2, "lat": maxLat, "lon": maxLon}
}

function findBottomLeft(pointList) { 
	var minLat = null;
	var minLon = null;
		
		pointList.data.forEach(
			point => {
				if (minLat ==null) {
					minLat = point.lat
					minLon = point.lon
				}
				else {
					if (point.lat < minLat){
						minLat = point.lat
					}
					if (point.lon < minLon){
						minLon = point.lon
					}
				}
			}
			)
		
		return {"pointID": 3, "lat": minLat, "lon": minLon}
}

function findBottomRight(pointList) { 
	var minLat = null;
	var maxLon = null;
		
		pointList.data.forEach(
			point => {
				if (minLat ==null) {
					minLat = point.lat
					maxLon = point.lon
				}
				else {
					if (point.lat < minLat){
						minLat = point.lat
					}
					if (point.lon > maxLon){
						maxLon = point.lon
					}
				}
			}
			)
		
		return {"pointID": 4, "lat": minLat, "lon": maxLon}
}


function Run(){
	// get the corners by creating functions which select an item from the data which has the correct values
	var topLeftPoint = findTopLeft(theJSON);
	var topRightPoint = findTopRight(theJSON);
	var bottomLeftPoint = findBottomLeft(theJSON);
	var bottomRightPoint = findBottomRight(theJSON);
	
	// make an output object containing the corner points
	var boundingBox = 
	{
		topLeft: topLeftPoint,
		topRight: topRightPoint,
		bottomLeft: bottomLeftPoint,
		bottomRight: bottomRightPoint
	}
	
	console.log("Bounding box computed for abelloso@tamu.edu: ");
	console.log(boundingBox);
}
