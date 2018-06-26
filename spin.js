//easy
function spinImage () {
  document.getElementById('img').classList = 'spinning'
}


//hard
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('img').addEventListener('click', function(e) {
    document.getElementById('img').classList = 'spinning'
  })
})
