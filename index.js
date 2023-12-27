
$.ajax({
    type: "get",
    url: "mca_info.csv",
    success: function (response) {
        let list = ``;
        let students = $.csv.toObjects(response);
        students.sort().forEach(student => {
            let name = student["Name"]
            let firstName = name.split(" ")[0]
            let email = student["Email Address"]
            let image = new URL(student["Passport Size Image"])
            let imageID = image.searchParams.get('id')
            let imageLink = `https://drive.google.com/uc?id=${imageID}`
            let kietmail = student["College Email I'd"]
            let libID = student["Library I'D"]
            let github = student["Github"]
            let portfolio = student["Github Portfolio Link"]
            let linkedin = student["LinkedIn Profile Link"]
            let facebook = student["Facebook Profile Link"]
            let instagram = student["Instagram Profile Link"]
            let twitter = student["Twitter Profile Link"]
            let youtube = student["Youtube Channel Link"]
            let socials = {
                "facebook": facebook,
                "twitter": twitter,
                "instagram": instagram,
                "github": github,
                "linkedin": linkedin,
                "youtube": youtube
            }

            list += `
                <div class="col-md-4 col-lg-4 col-sm-6 mb-4">
                <div class="my-card mx-auto">
                    <div class="card-face front"
                        style="background-image:url('${imageLink}')">
                        <div class="overlay"></div>
                        <h3 class="h3 text-center">${firstName}</h3>
                    </div>
                    <div class="card-face back">
                        <div class="info">
                            <ul class="info_list">
                                <li class="info_item"><b>${name}</b></li>
                                <li class="info_item">${libID}</li>
                                <li class="info_item mail">${email}</li>
                                <li class="info_item mail">${kietmail}</li>
                                <li class="info_item"><a href='${portfolio}' target="_blank">Portfolio</a></li>
                            </ul>
                        </div>
                        <div class="social-links">
                    `
            for (const [key, value] of Object.entries(socials)) {
                if (value != '')
                    list += `<a href=${value} target="_blank"> <i class="bi bi-${key}"></i><a>`
            }

            list += `
                        </div>
                    </div>
                </div>
            </div>
                `

        })

        $(".row").html(list)
    }
});
