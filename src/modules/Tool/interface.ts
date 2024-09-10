interface Tool {
    name: string;
    icon: string;
    isActive: boolean;
    description?: string;
    position: [number, number];
    size:[number,number];

}
export default Tool
