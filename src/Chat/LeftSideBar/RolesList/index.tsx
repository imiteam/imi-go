'use client'
import cn from 'classnames'
import {memo} from 'react'
import {List} from './List'

export const RolesList = memo(function RolesList(props: {
  className?: string
  id: string
  searchParams: {[key: string]: string | string[] | undefined}
  roles: any
  userId: string
}) {
  // const {theme} = useTheme()

  // const {data} = await getClient().query<GetRolesWithTitleFilterQuery, GetRolesWithTitleFilterQueryVariables>({
  //   query: GetRolesWithTitleFilterDocument,
  //   variables: {title: props.searchParams.role_search ? String(props.searchParams.role_search) : ""},
  //   fetchPolicy: 'no-cache',
  //   context: {
  //     fetchOptions: {
  //       next: {revalidate: 0},
  //     },
  //   },
  // })
  return (
    <div className={cn('grow md:sm:pr-[7px]', props.className)}>
      <List roles={props.roles} userId={props.userId as string} />
    </div>
  )
})
