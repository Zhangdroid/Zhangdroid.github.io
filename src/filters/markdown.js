import yaml from 'yaml-front-matter'
import marked from 'marked'

export default (content) => {
  let obj = yaml.parse(content)
  obj.__content = marked(obj.__content)
  return obj
}
