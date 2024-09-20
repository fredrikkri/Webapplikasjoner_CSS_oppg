type AvatarProps = {
    name: string;
  };

export default function Avatar(props: AvatarProps) {
    const {name} = props
    const firstletter = name.split(" ").join("").toUpperCase().slice(0, 1)
    return (
        <p className="avatar">{firstletter}</p>
    )
}