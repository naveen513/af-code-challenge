$.ajax({
    url: "https://5dc588200bbd050014fb8ae1.mockapi.io/assessment",
}).done(function (data) {
    let template = Handlebars.compile(`
        <ul class="people_list">
            {{#each people}}
            <li>
                <img src="{{this.avatar}}">
                {{this.id}} -
                {{this.name}} -
                {{this.createdAt}}
            </li>
            
            {{/each}}
        </ul>
    `);
console.log(data);

    $("#result").append(template({people: data}));
});

// avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/daykiine/128.jpg"
// createdAt: "2021-03-31T13:24:14.020Z"
// id: "16"
// name: "Ryann Wiegand"
