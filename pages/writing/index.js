import Link from 'next/link'
import Wrapper from '../../src/components/wrapper'

import * as spacings from '../../src/theme/spacings'
import * as typography from '../../src/theme/typography'
import * as colors from '../../src/theme/colors'

import posts from '../../engine/posts'

const Writing = () => (
  <>
    <Wrapper>
      <h2>Writing</h2>
      <section>
        <h3>Code Write-ups</h3>
        <p>On JavaScript, CSS, React etc.</p>

        <ul>
          {posts
            .filter(p => p.date)
            .map(page => (
              <Link href={page.href} key={page.title}>
                <a>
                  <li>
                    <article>
                      <header>
                        <img
                          src={`/static/images/hero/${page.slug}.svg`}
                          alt="Illustration of the article"
                        />
                        <h4>{page.title}</h4>
                      </header>
                      <footer>
                        <time>{new Date(page.date).toLocaleDateString()}</time>
                      </footer>
                    </article>
                  </li>
                </a>
              </Link>
            ))}
        </ul>
      </section>
    </Wrapper>

    <style jsx>{`
      h3,
      h4 {
        margin: 0;
      }

      h3 + p {
        text-align: center;
        margin-top: ${spacings.small};
      }

      ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        grid-gap: ${spacings.normal};
        list-style: none;
        margin: ${spacings.large} 0;
        padding: 0;
        text-align: center;
      }

      li {
        background-color: white;
        padding: ${spacings.normal};
        height: 100%;
        box-shadow: 0 4px 8px ${colors.shadow};
      }

      img {
        max-width: 100%;
      }

      article footer {
        margin-top: ${spacings.small};
        font-size: 0.7rem;
        font-family: ${typography.harmanRetro};
        color: ${colors.accent};
      }
    `}</style>
  </>
)

export const meta = {
  title: 'Blog',
}

Writing.title = 'Writing'

export default Writing
