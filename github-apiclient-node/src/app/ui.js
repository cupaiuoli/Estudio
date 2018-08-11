class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        this.clearMessage();
        this.profile.innerHTML = `
            <div class="card mt-2 animated bounceInLeft">
                <img src="${user.avatar_url}" class="card-img-top"/>
                <div class="card-body">
                    <h3 class="card-title">${user.name}</h3>
                    <h2 class="card-title">${user.login}</h2>
                    <a href="${user.html_url}" class="btn btn-primary btn-block" target="_blank">View profile</a>
                    <span class="badge badge-success">
                        Followers: ${user.followers}
                    </span>
                    <span class="badge badge-success">
                        Following: ${user.following}
                    </span>
                    <span class="badge badge-warning d-block mt-1">
                        Company: ${user.company != null ? user.blog : ''}
                    </span>
                    <span class="badge badge-info d-block mt-1">
                        Blog: ${user.blog != null ? user.blog : '' }
                    </span>
                </div>
            </div>
        `;
    }

    showMessage(message, cssClass) {
        let div = document.createElement('div');
        div.className = cssClass;
        div.appendChild(document.createTextNode(message));

        let content = document.querySelector('.row');
        let profile = document.querySelector('#profile');

        content.insertBefore(div, profile);
    }

    clearMessage() {
        let alert = document.querySelector('.alert');
        if (alert) {
            alert.remove();
        }
    }

    showRepositories(repositories) {
        let template = '';
        repositories.forEach(repo => {
            template += `
                <div class="card card-body mt-2 animated bounceInUp">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary">
                                ${repo.language}
                            </span>
                        </div>
                    </div>
                </div>
            `;
        });
        document.getElementById('repositories').innerHTML = template;
    }
}

module.exports = UI;