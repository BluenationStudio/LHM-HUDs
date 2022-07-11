import { configs } from './../App';
export function ChangeColor() {
    console.log("funkcia sa načítala");

    const onChange = (data: any) => {
        if (!data) return;

        const color = data.color_scheme.select_variant;
        console.log(color);
        const setTheme = (theme: string) => {
            const root = document.getElementById("theme");
            if (root) root.className = theme;
            console.log("element sa prepol");
        }


        if (!color || color === 'ucp') {
            setTheme('ucp');
            console.log("tema1");
        }
        if (color === 'ucc') {
            setTheme('ucc');
            console.log("tema2");
        }
        if (color === 'eus') {
            setTheme('eus');
            console.log("tema3");
        }
    }

    configs.onChange(onChange);
    onChange(configs.data)
}