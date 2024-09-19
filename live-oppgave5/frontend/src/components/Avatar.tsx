type AvatarProps = {
    name: string;
  };

export default function Avatar(props: AvatarProps) {
    const {name} = props
    return (
        <p>{name.slice(0,1).toUpperCase()}</p>
    )
}