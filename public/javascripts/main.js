(() => {
    const submitBtn = document.querySelector('#submit'),
        name = document.querySelector('#name'),
        age = document.querySelector('#age'),
	email = document.querySelector('#email'),
	text = document.querySelector('#text'),
        message = document.querySelector('.msg');

    validateFields = () => {
        return name.value !== "" && age.value !== "" && email.value !== "" && text.value !== ""
    }

    const fetchData = () => {
        fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({name: name.value, email: email.value, age: age.value, text: text.value})
        })
            .then(res => res.json())
            .then((res) => message.innerHTML = `<div class="message">${res.message} <a href="/log">Посмотреть</a></div>`)
            .catch(() => message.innerHTML = "<div class='message'>Ошибка</div>");
    }
	const submitHandler = () => {
	    if (!validateFields()) {
                message.innerHTML = "Не все поля заполнены";
                return;
            }

            message.innerHTML = "";
            fetchData();
    	}

    submitBtn.addEventListener("click", submitHandler);
})();
