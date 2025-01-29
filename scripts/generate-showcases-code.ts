import * as nodefs from "node:fs"
import * as nodepath from "node:path"
import * as _ from "lodash-es"



main()

function main()
{
    const showcases_dir = nodepath.join(nodepath.resolve(), 'showcases')
    const showcases_code_dir = nodepath.join(nodepath.resolve(), 'public/showcases-code')

    if (!nodefs.existsSync(showcases_code_dir)) nodefs.mkdirSync(showcases_code_dir, { recursive: true })

    const showcase_dirs = nodefs.readdirSync(showcases_dir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)

    showcase_dirs.forEach((showcase_dir) => {
        const showcase_path = nodepath.join(showcases_dir, showcase_dir)
        const showcase_files = nodefs.readdirSync(showcase_path)

        const output_dir = nodepath.join(showcases_code_dir, showcase_dir)
        
        if (!nodefs.existsSync(output_dir)) nodefs.mkdirSync(output_dir, { recursive: true })

        showcase_files.forEach(file => {
            if (file.endsWith('.vue'))
            {
                const file_path = nodepath.join(showcase_path, file)
                const content = nodefs.readFileSync(file_path, 'utf-8')
                const fragments = extract_vue_sfc_fragments(content)

                const output_file_name = `${file.replace('.vue', '.json')}`
                const output_file_path = nodepath.join(output_dir, output_file_name)

                const output_content = JSON.stringify(fragments)

                nodefs.writeFileSync(output_file_path, output_content)
            }
        })
    })
}

function extract_vue_sfc_fragments(content)
{
    function extract(regex)
    {
        const match = content.match(regex)
        return match ? match[0].trim() : ''
    }

    return {
        template: extract(/<template[^>]*>([\s\S]*?)<\/template>/),
        script: extract(/<script[^>]*>([\s\S]*?)<\/script>/),
        style: extract(/<style[^>]*>([\s\S]*?)<\/style>/),
    }
}
