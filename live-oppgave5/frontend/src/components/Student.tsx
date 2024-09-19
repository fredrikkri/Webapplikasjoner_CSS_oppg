import Avatar from "./Avatar";

type StudentProps = {
    id: string;
    name: string;
  };

export default function Student(props: StudentProps) {
    const {name} = props
    return (
        <section>
            <Avatar name={name} />
            <p className="student-name">{name}</p>
        </section>
    )
}