<div class="layer">
	<div>
		<% for (var i=0; i<arr.length; i++) { %>
			<%= "<span>"+arr[i]+"</span>" %>
		<% } %>
	</div>
	<img width="400" src="${ require('../../assets/courseimg04.jpg') }"/>
	<div> this is <%= name %> layer </div>
	
</div>
