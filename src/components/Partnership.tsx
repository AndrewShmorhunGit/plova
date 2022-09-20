import styled from "styled-components";

export const Partnership = () => {
  return (
    <Wrapper>
      <section className="container">
        <div className="center">
          <img
            src="https://res.cloudinary.com/glovoapp/image/fetch//w_117,h_80,b_transparent,c_lpad,q_auto/https://glovoapp.com/images/corporate-container/together.svg"
            alt=""
          />
        </div>
        <h1 className="title center">Welcome Partners</h1>
        <div className="join center">
          <div className="join-unit">
            <img src="" alt="" />
            <h3>Become someone</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, cumque. Molestiae omnis iste eaque iusto ut repudiandae
              sed tempore possimus.
            </p>
            <button className="btn"> Join us</button>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .title {
  }

  .join {
    padding: 4rem 4rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
    row-gap: 2rem;
    column-gap: 2rem;
    padding-bottom: 0;
  }

  .join-unit {
    display: flex;
    flex-direction: column;
  }
`;
