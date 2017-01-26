module.exports = startsWith
function startsWith (body, search) {
  if (search.length > body.length) return false
  const max_i = search.length
  for (let i = 0; i < max_i; i++) {
    if (body[i] !== search[i]) return false
  }
  return true
}