import TournamentResult from '@src/types/tournament-result'
import React from 'react'
import { TbListDetails } from 'react-icons/tb'
import Tournament from '@src/types/tournament'
import { asTable } from './general/Table'
import Card from './general/Card'
import {Card, asTable} from 'components'

export interface CareerSummaryTableProps {
  data: TournamentResult[] // | ((page: number, limit: number) => TournamentResult)
}

interface TournamentBySeason {
  season: number
  tournaments: TournamentResult[]
}

const CareerSummaryTable = ({ data }: CareerSummaryTableProps) => {
  const [seasons, setSeasons] = React.useState<TournamentBySeason[]>([])
  const { Table, Attribute } = asTable<TournamentBySeason>()

  React.useEffect(() => {
    const newSeasons: TournamentBySeason[] = []
    data.forEach((result) => {
      const tourn = result.tournament as Tournament
      const { season } = tourn
      const seasonIndex = newSeasons.findIndex((s) => s.season === season)
      if (seasonIndex === -1) {
        newSeasons.push({ season, tournaments: [result] })
      } else {
        newSeasons[seasonIndex].tournaments.push(result)
      }
    })
    setSeasons(newSeasons)
  }, [data])

  return (
    <Card icon={<TbListDetails />} title="Career Summary" className="max-w-[800px] mx-auto my-16">
      <Table data={seasons} summary>
        <Attribute
          header="Szn"
          value={{
            literal: ({ season }) => season,
          }}
          sortable
        />
        <Attribute
          header="Tournaments"
          value={{
            literal: ({ tournaments }) => tournaments.length,
          }}
          summarizable
        />
      </Table>
    </Card>
  )
}

export default CareerSummaryTable