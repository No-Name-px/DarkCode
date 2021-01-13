const template = function(id, title, body){
    return `
    <tr>
      <th scope="row">${id}</th>
      <td>${title}</td>
			<td>${body}</td>
			<td>
				<button value="${id}">Redact</button>
			</td>
    </tr>`
}
window.onload = function(){
		let posts;
		let form = document.getElementById("PostForm");
    form.addEventListener('submit', function(e){
        e.preventDefault();
        let data = {
            title: form.title.value,
            body: form.body.value
				};
				$.post("https://jsonplaceholder.typicode.com/posts/", JSON.stringify(data),
					function (data) {
						console.log(data)
					},
					"JSON"
				);
		});
		$.get("https://jsonplaceholder.typicode.com/posts/",
			function (data) {
				posts = data;
				data.slice(0,5).forEach(post => {
					let temp_post = template(post.id, post.title, post.body)
					$("#TableContent").append(temp_post);
				});
				$("button").click(function (e) { 
					e.preventDefault();
					var but_id = this.value;
					$("#PutForm").css("display", "flex");
					$("#PutForm input[name='title']").val(posts[but_id - 1].title);
					$("#PutForm input[name='body']").val(posts[but_id - 1].body);
					$("#PutForm").submit(function (e) { 
						e.preventDefault();
						let put_data = {
							title: $("#PutForm input[name='title']").val(),
							body: $("#PutForm input[name='body']").val()
						};
						$.ajax({
							url: 'https://jsonplaceholder.typicode.com/posts/'+but_id,
							type: 'PUT',
							data: JSON.stringify(put_data),
							success: function(data_2) {
								console.log(data_2);
							}
						});
						$("#PutForm").css("display", "none");
					});
				});
			},
			"JSON"
		)		
	};