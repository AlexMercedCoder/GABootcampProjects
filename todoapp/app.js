//added the defer keyword to my script tag, to avoid script pre-loading problems

//DATA SETS


//FUNCTIONS DEFINITIONS

const createToDo = () => {
	$newItem = $('<div>').addClass('notDone');
	$newItem.text($input.val());
	console.log($input.val());
	$todoList.append($newItem);
	$newItem.on('dblclick', (event) => {
		console.log('activated')
		$(event.target).attr("class","done");
		$completed.append($(event.target));
		$(event.target).on('dblclick', (event) => {
			console.log('activated')
			$(event.target).hide(5000);

		})

	})
}

const savePosts = () =>{
	const posts = [];
	for (i= 0; i < $('.notDone').length; i++){
		console.log('loop');
		posts.push($('.notDone').eq(i).text());
		console.log($('.notDone').eq(i).text())
	}
	postObject ={ posts: posts};
	console.log(postObject);
	let postString = JSON.stringify(postObject);
	console.log(postString);
	localStorage.setItem("posts",postString)
	console.log(localStorage.getItem("posts"));

}

const loadPosts = () => {
	if (localStorage.posts){
		jsonString = localStorage.posts;
		postObject = JSON.parse(jsonString);
		for (i in postObject.posts){

			$newItem = $('<div>').addClass('notDone');
			$newItem.text(postObject.posts[i]);
			console.log(postObject.posts[i]);
			$todoList.append($newItem);
			$newItem.on('dblclick', (event) => {
				console.log('activated')
				$(event.target).attr("class","done");
				$completed.append($(event.target));
				$(event.target).on('dblclick', (event) => {
					console.log('activated')
					$(event.target).hide(5000);

				})

			})

		}
	}
}


//DOM VARIABLES

$todoList = $('.todolist');
$completed = $('.complist');
$submit = $('#submit');
$input = $('input');
$save = $('#save');
$load = $('#load');

//Event Listeners
$submit.on('click',createToDo)
$save.on('click', savePosts)
$load.on('click', loadPosts)

//THE PROGRAM
