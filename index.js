
$.ajax({
    type: "get",
    url: "mca_info.csv",
    success: function (response) {
        let list = `<div class="row">`;
        let students = $.csv.toObjects(response);
        students.sort((a, b) => {
            let fa = a["Name"].toLowerCase(), fb = b["Name"].toLowerCase();
            if (fa > fb) return 1;
            else if (fb > fa) return -1;
            else return 0
        }).forEach(student => {

            let name = student["Name"]
            let firstName = name.split(" ")[0]
            let email = student["Email Address"]
            let image = student["Passport Size Image"]
            let kietmail = student["College Email I'd"]
            let libID = student["Library I'D"]
            let github = student["Github Link"]
            let portfolio = student["Github Portfolio Link"]
            let linkedin = student["LinkedIn Profile Link"]
            let facebook = student["Facebook Profile Link"]
            let instagram = student["Instagram Profile Link"]
            let twitter = student["Twitter Profile Link"]
            let youtube = student["YouTube Channel Link"]
            let socials = {
                "facebook": facebook,
                "twitter": twitter,
                "instagram": instagram,
                "github": github,
                "linkedin": linkedin,
                "youtube": youtube
            }

            list += `<div class="col-md-6 col-lg-4 col-sm-12 mb-4">
                <div class="my-card mx-auto">
                    <div class="card-face front"
                        style="background-image:url('images/${image}')">
                        <div class="overlay"></div>
                        <h3 class="h3 text-center">${firstName}</h3>
                    </div>
                    <div class="card-face back">
                        <div class="info">
                            <ul class="info_list">
                                <li class="info_item"><b>${name}</b></li>
                                <li class="info_item">${libID}</li>
                                <li class="info_item mail"><a class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="mailto:${email}">${email}</a></li>
                                <li class="info_item mail"><a class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="mailto:${kietmail}">${kietmail}</a></li>
                                <li class="info_item"><a class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href='${portfolio}' target="_blank">Portfolio</a></li>
                            </ul>
                        </div>
                        <div class="social-links">
                    `
            $.each(socials, (key, value) => {
                if (value != '')
                    list += `<a href="${value}" target="_blank"> <i class="bi bi-${key}"></i></a>`
            })

            list += `
                        </div>
                    </div>
                </div>
            </div>
                `
            // Add to the card deck.


        })
        list += "</div>"
        $(".container").html(list)
        $('.row').trigger('create');
    }
});

$(window).scroll(() => {
    if (scrollY > 0) {
        $("nav").css("background", "#000")
    } else {
        $("nav").css("background", "none")
    }


})

$(document).ready(() => {
    $(".nav-item").click((e) => {
        $(".active").removeClass("active")
        $(e.target).addClass("active")
    })
})