const linksSocialMedia = {
                github: "CordeiroDoVale",
                YouTube: "channel/UCUlwG3ylAEpvDqwsHfP7Kgg",
                Faceboouy77k: "cordeirinho.do.vale",
                Instagram: "cordeiro.do.vale",
                Twitter: ""
              }
              
              function changeSocialMediaLinks() {
                for(let li of socialLinks.children) {
                  const social = li.getAttribute('class')

                  li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
                }
              }
              
              changeSocialMediaLinks()

              function getGitHubProfileInfos() {
                const url = `https://api.github.com/users/${linksSocialMedia.github}`

                fetch(url)
                .then(response => response.json())
                .then(data => {
                  /*const userName = data.name
                  const login = data.login
                  const bio = data.bio
                  const picture = data.avatar_url

                  document.getElementById('githubUserName').innerHTML = `${userName}`
                  document.getElementById('githubLogin').innerHTML = `${login}`
                  document.getElementById('userBio').innerHTML = `${bio}`
                  document.getElementById('avatarPicture').src = `${picture}`
                  //Vemos claramente que o jeito que fiz não foi dos mais econômicos kk
                  */

                  githubUserName.textContent = data.name
                  githubLogin.textContent = data.login
                  userBio.textContent = data.bio
                  avatarPicture.src = data.avatar_url
                })
              }

              getGitHubProfileInfos()